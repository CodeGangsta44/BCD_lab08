
class Car{
  constructor(elem, max){
    this.car = elem;
    this.gear_coef = 1;
    this.gear = 1;
    this.rpm = 1000;
    this.speed = 0;
    this.rpm_limit = max;
  }
  set_rpm_limit(max){
    this.rpm_limit = max;
  }
  get_ready(){
    this.gear = 1;
    this.rpm = 1000;
    this.speed = 0;
    clearInterval(this.ride);
  }
  shift(){
    this.gear++;
    this.rpm = this.speed / this.gear;
  }
  get_gear(){
    return this.gear;
  }
  get_rpm(){
    return this.rpm;
  }
  get_speed(){
    return (this.gear * this.rpm);
  }
  move(option, obj_tahometr){
    this.ride = setInterval(() => {
      if(parseFloat(this.car.style.marginLeft, 10) >= 100){
        clearInterval(this.ride);
        return;
      }
      else this.car.style.marginLeft = (parseFloat(this.car.style.marginLeft, 10) + (this.get_speed()/40000)).toString() + '%';
      if(option == 'manual'){
        obj_tahometr.style.width = ((this.rpm * 100) / this.rpm_limit).toString() + '%';
      }
      if (this.rpm_limit > this.rpm){
        this.speed = this.get_speed();
        this.rpm += 200 / this.gear * (option == 'auto' ? 0.7 : 1);
      } else if(option == 'auto') {
        this.shift();
      }
    }, 20)
  }
}

let my_car = new Car(document.getElementById('car'), 6000);
