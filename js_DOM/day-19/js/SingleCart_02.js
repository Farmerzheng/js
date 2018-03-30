/*
  param
  data:要展示的数据
  box:数据展示到哪个盒子

*/
function SingleCart(data, box) {
  this.data = data;
  this.box = box;
}
SingleCart.prototype = {
  // 初始化对象
  init: function() {
    //展示数据
    this.show();
    // 绑定事件
    this.bindEvent();
  },
  bindEvent() {
    this.subtractBtn.addEventListener("click", this.subtractHandler.bind(this));
    this.addBtn.addEventListener("click", this.addHandler.bind(this));
    // 表单的输入框有两个事件： 获取焦点（focus）和失去焦点(blur)
    this.numInput.addEventListener("blur", this.inputFinishHandler.bind(this));
    // 为复选框添加事件
    this.checkbox.addEventListener("click", this.checkedHandler.bind(this));
  },
  subtractHandler: function() {
    if (this.num === 0) return;
    this.num--;
  },
  addHandler: function() {
    this.num++;
  },
  inputFinishHandler: function() {
    if (this.numInput.value < 0) this.numInput.value = 0;
    this.num = this.numInput.value;
  },
  checkedHandler: function() {
    // console.log(this.checkbox.checked);
    if (this.checkbox.checked) {
      // 如果勾选改变tr背景颜色
      this.tr.style.backgroundColor = "pink"
    } else {
      // 没有被勾选让颜色变成白色
      this.tr.style.backgroundColor = "white"
    }
  },
  check: function(checked) {
    if (checked) {
      this.checkbox.checked = true;
      this.tr.style.backgroundColor = "pink";
    } else {
      this.checkbox.checked = false;
      this.tr.style.backgroundColor = "white";
    }

  },
  show: function() {
    let tr = document.createElement("tr");

    //如果要是第一行数据
    for (let key in this.data) {
      let td = document.createElement("td");
      // key值不同，做的事情不一样
      if (key === "checked") {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        this.checkbox = checkbox;
        if (this.data[key] === true) {
          checkbox.checked = true;
          tr.style.backgroundColor = "pink";
        }
        td.appendChild(checkbox);
      } else if (key === "num") {
        let subtractBtn = document.createElement("input");
        subtractBtn.type = "button";
        subtractBtn.value = "-";
        this.subtractBtn = subtractBtn;
        let numInput = document.createElement("input");
        numInput.type = "text";
        numInput.value = this.data[key];
        this.numInput = numInput;
        let addBtn = document.createElement("input");
        addBtn.type = "button";
        addBtn.value = "+";
        this.addBtn = addBtn;
        td.appendChild(subtractBtn);
        td.appendChild(numInput);
        td.appendChild(addBtn);
      } else if (key === "total") {
        td.className = "total";
        td.innerText = this.data[key];
        this.totalPrice = td;
      } else {

        td.innerText = this.data[key];
      }
      tr.appendChild(td);
    }
    this.tr = tr;
    this.box.appendChild(tr);
  },
  set num(value) {  
    let changedPrice = (value - this.data.num)*this.data.price;
    this.data.num = value;

    // 将num值的变化通知给外界

    // 1、创建要抛发的事件对象
    let event = document.createEvent("HTMLEvents");
    // 2、事件对象初始化（取名）
    event.initEvent("numChanged",true,true);
    // 3、事件对象携带的想要传给外界的东西
    // 把变化的价格传给外界
    event.changedPrice = changedPrice;
    // 4、抛发事件（此对象this.numInput 负责抛发numChanged事件 ）
    // 抛发事件的对象一定是DOM对象
    this.numInput.dispatchEvent(event);

    this.render();
  },
  get num() {
    return this.data.num;
  },
  render: function() {
    this.numInput.value = this.data.num;
    this.totalPrice.innerText = (this.data.price * this.data.num).toFixed(2);
    // 改变所有商品最后的总价---->获得所有的商品
    // 外面要是能够知道render()方法什么时候执行就好了   
    
  }
}