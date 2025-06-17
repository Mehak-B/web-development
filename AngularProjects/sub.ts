import {Subject} from 'rxjs';
import { BehaviorSubject } from 'rxjs';


// const subject = new Subject<any>();
//   subject.subscribe(value => console.log('subject  A:', value));
//   subject.next(1); 
//   subject.subscribe(value => console.log('subject B:', value));
//   subject.next(2);
//   const behaviorSubject = new BehaviorSubject<number>(0);
//   behaviorSubject.subscribe(value => console.log('behaviour sub A:', value));
//   behaviorSubject.next(1); 
//   behaviorSubject.subscribe(value => console.log('behaviour sub B:', value));
//   behaviorSubject.next(2);
// const observable = new Observable(obs=>{
//     obs.next(1)
//     obs.next(2)
//     obs.next(3)
//   })

//   observable.subscribe(res=> console.log('obser',res))

//   const loginState = new BehaviorSubject<boolean>(false);

// loginState.subscribe(state => console.log('Logged in?', state));

// loginState.next(true);

// import { Subject } from 'rxjs';
// import { map } from 'rxjs';

const behavior = new BehaviorSubject<number>(100);

behavior.subscribe(val => console.log('A:', val));

behavior.next(200);

behavior.subscribe(val => console.log('B:', val));

behavior.next(300);


