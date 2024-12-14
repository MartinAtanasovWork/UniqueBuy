import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-toast',
    standalone: true,
    imports: [],
    templateUrl: './toast.component.html',
    styleUrl: './toast.component.css'
})
export class ToastComponent {
    @Input() message: string|undefined;
    @Input() type: string|undefined;
    @Input() isVisible: boolean = false;
    @Output() closeToast = new EventEmitter<void>();
  
    close(){       
        this.closeToast.emit();
    }
}
