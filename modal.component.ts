import {Component, EventEmitter, Input, Output} from "@angular/core";
import {outOfBoundsError} from "@angular/core/src/di/reflective_errors";

@Component({
    selector: 'de-modal',
    templateUrl: 'modal.template.html',
    styleUrls: ['./modal.scss']
})


export class DeModal {

    overModal = false;
    stateValue = false;
    @Output() stateChange = new EventEmitter();
    @Input() outOfBounds: boolean = true;
    @Input()
    get state() {
        return this.stateValue;
    }
    set state(val) {
        this.stateValue = val;
        this.stateChange.emit(this.stateValue);
    }

    outOfBoundsClick() {
        if (this.outOfBounds && !this.overModal)
            this.state = !this.state;
    };

}
