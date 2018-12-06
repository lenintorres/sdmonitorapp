import { Component } from "@angular/core";
import { SelectorContext } from "@angular/compiler";

@Component(
    {
        selector:'app-device',
        templateUrl:'./device.component.html'

    }    
)
export class DeviceComponent{
    id:number=0;
    name:"Not set"
    ipv4Address="Not set";
    monitorInterval:number=5;
    isMonitored:boolean=true;
    property = "Not set";
    property2 = "property Not set"
    onToggleMonitoring(){
        this.isMonitored=!this.isMonitored;
    }
    onChangeProperty(){
        this.property = "Not set";
    }
    onElementInput(event:Event){
        this.property2 = (<HTMLInputElement>event.target).value;
    }
}