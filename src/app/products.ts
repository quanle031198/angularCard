export class Products {
  // id: number | undefined ;
  fullname: string | undefined;
  chip: string | undefined;
  memory: string | undefined;
  ram: string | undefined;
  motion: number | undefined;
  category: string | undefined;

  constructor(id: number | undefined,fullname: string | undefined,chip: string | undefined,memory: string | undefined,ram: string | undefined,motion: number | undefined,category: string | undefined){
    // this.id = id;
    this.fullname = fullname;
    this.chip = chip;
    this.memory = memory;
    this.ram = ram;
    this.motion = motion;
    this.category = category;

  }
}


