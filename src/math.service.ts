import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
    public accumulate(data: number[]): number {
        console.log('service serve math data: ' + data +' sum= '+ (data || []).reduce((a,b)=>Number(a) + Number(b)));
        return (data || []).reduce((a,b)=>Number(a) + Number(b));
    }
}
