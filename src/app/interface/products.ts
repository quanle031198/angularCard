export class Products {
  data: any;
  id: number ;
  name: string | undefined;
  avatar: string | undefined;
  ram :number | undefined;
  cpu :number | undefined;
  hdd :number | undefined;

  constructor(data: any, id: number , name: string | undefined,avatar: string | undefined,ram :number | undefined,cpu :number | undefined,hdd :number | undefined){
    this.data = data;
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.ram = ram;
    this.cpu = cpu;
    this.hdd = hdd;
  }
}


