//function applyMixins(derivedCtor: any, baseCtors: any[]) {
  //baseCtors.forEach(baseCtor => {
    //Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      //derivedCtor.prototype[name] = baseCtor.prototype[name];
    //});
  //});
//}

export function Mixin(baseCtors: Function[]) {
  return function (derivedCtor: Function) {
    baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
    });
  };
}
export class AllMessages {
  show(): void {
    alert("Show all messages");
  }
}

export class FilterMessages {
  filter(): void {
    alert("Filter Messages");
  }
}

