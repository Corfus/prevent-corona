import {
  Component,
  ComponentFactoryResolver, Injector,
  Input, OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Subscription} from 'rxjs';

export interface IDynamicComponent {
  type: Type<{}>;
  inputs?: { [key: string]: any };
  outputs?: { [key: string]: (val: any) => void };
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnDestroy {
  @ViewChild('dynamic', {read: ViewContainerRef, static: true}) vcr: ViewContainerRef;

  @Input() set component(comp: IDynamicComponent) {
    this.emitterSubscription.forEach(sub => sub.unsubscribe());
    if (comp.type) {
      const componentFactory = this.cfr.resolveComponentFactory(comp.type);
      const injector = Injector.create({providers: []});
      const compRef = componentFactory.create(injector);

      if (comp.inputs) {
        Object.entries(comp.inputs).forEach(([key, input]) => compRef.instance[key] = input);
      }

      if (comp.outputs) {
        Object.entries(comp.outputs).forEach(([key, output]) => {
          const inst = compRef.instance[key];
          if (inst && inst.subscribe) {
            this.emitterSubscription.push(inst.subscribe(output));
          }
        });
      }

      this.vcr.insert(compRef.hostView);
    }
  }

  private emitterSubscription: Array<Subscription> = [];

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnDestroy(): void {
    this.emitterSubscription.forEach(sub => sub.unsubscribe());
  }
}
