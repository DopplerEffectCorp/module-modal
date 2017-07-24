import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'de-modal',
    templateUrl: 'modal.template.html',
    styleUrls: ['./modal.scss']
})


export class DeModal {

    overModal = false;
    stateValue = false;
    @Output() stateChange = new EventEmitter();
    @Input()
    get state() {
        return this.stateValue;
    }
    set state(val) {
        this.stateValue = val;
        this.stateChange.emit(this.stateValue);
    }

    outOfBounds() {
        if (!this.overModal)
            this.state = !this.state;
    };

}
