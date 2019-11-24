import { ArrayAveragePipe } from './array-average.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ArrayAveragePipe
    ],
    exports: [
        ArrayAveragePipe
    ]
})

export class PipesModule {}

