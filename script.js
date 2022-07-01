function changeFlexContainerProperty(className, cssPropertyName){
  let radios = document.querySelectorAll('input.'+className);

  for(let i=0; i<radios.length; i++){
    let selector = "."+className+" .container"
    radios[i].addEventListener("change", function(){
      document.querySelector("."+className+" code").innerHTML = ".container { \n &nbsp;"+className+": "+this.value+"; \n}"
      document.querySelector(selector).style[cssPropertyName] = this.value;
    })
  }
}

function changeFlexItemProperty(className, cssPropertyName){
  let radios = document.querySelectorAll('input.'+className);

  for(let i=0; i<radios.length; i++){
    let selector = "."+className+" .container .two"
    radios[i].addEventListener("change", function(){
      document.querySelector("."+className+" code").innerHTML = ".item2 { \n &nbsp;"+className+": "+this.value+"; \n}"
      document.querySelector(selector).style[cssPropertyName] = this.value;
    })
  }
}

function changeFlexItemPropertyNumber(className, cssPropertyName) {
  let selector = "."+className + " .container .item"

  let radios = document.querySelectorAll('input.' + className);
  let flexItems = document.querySelectorAll(selector);

  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function () {
      flexItems[i].style[cssPropertyName] = this.value;
      document.querySelector("."+className+" code").innerHTML = ".item1 { \n &nbsp;"+className+": "+this.value+"; \n}"
    })
  }
}

changeFlexContainerProperty("flex-direction", "flexDirection");
changeFlexContainerProperty("align-items", "alignItems");
changeFlexContainerProperty("justify-content", "justifyContent");
changeFlexContainerProperty("align-content", "alignContent");
changeFlexContainerProperty("flex-wrap", "flexWrap");

changeFlexItemProperty("align-self", "alignSelf")
changeFlexItemPropertyNumber("flex-grow", "flexGrow")
changeFlexItemPropertyNumber("flex-shrink", "flexShrink")
changeFlexItemPropertyNumber("flex-order", "order")

let playgroundProps={
  container:{},
  item:{}
}

function changeFlexContainerPropertyPlayground(className, cssPropertyName){
  let radios = document.querySelectorAll('input.playground-'+className);

  for(let i=0; i<radios.length; i++){
    let selector = ".playground .container"
    radios[i].addEventListener("change", function(){
      playgroundProps.container[className] = this.value;
      updatePlaygroundCode();
      document.querySelector(selector).style[cssPropertyName] = this.value;
    })
  }
}

function changeFlexItemPropertyPlayground(className, cssPropertyName){
  let radios = document.querySelectorAll('input.playground-'+className);

  for(let i=0; i<radios.length; i++){
    let selector = ".playground .container .two"
    radios[i].addEventListener("change", function(){
      playgroundProps.item[className] = this.value;
      updatePlaygroundCode();
      document.querySelector(selector).style[cssPropertyName] = this.value;
    })
  }
}

function changeFlexItemPropertyNumberPlayground(className, cssPropertyName) {
  let selector = ".playground .container .item"

  let radios = document.querySelectorAll('input.playground-' + className);
  let flexItems = document.querySelectorAll(selector);

  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function () {
      flexItems[i].style[cssPropertyName] = this.value;
      playgroundProps.item[className] = this.value;
      updatePlaygroundCode();
    })
  }
}

function updatePlaygroundCode(){
  let str = ".container { \n";
  Object.keys(playgroundProps.container).forEach(key=>{
    str+="&nbsp;"+key+" : "+playgroundProps.container[key]+"; \n"
  })
  str+="} \n\n"
  str+=".item { \n";
  Object.keys(playgroundProps.item).forEach(key=>{
    str+="&nbsp;"+key+" : "+playgroundProps.item[key]+"; \n"
  })
  str+="} "
  document.querySelector(".playground code").innerHTML = str;

}

changeFlexContainerPropertyPlayground("flex-direction", "flexDirection");
changeFlexContainerPropertyPlayground("align-items", "alignItems");
changeFlexContainerPropertyPlayground("justify-content", "justifyContent");
changeFlexContainerPropertyPlayground("align-content", "alignContent");
changeFlexContainerPropertyPlayground("flex-wrap", "flexWrap");

changeFlexItemPropertyPlayground("align-self", "alignSelf")
changeFlexItemPropertyNumberPlayground("flex-grow", "flexGrow")
changeFlexItemPropertyNumberPlayground("flex-shrink", "flexShrink")
changeFlexItemPropertyNumberPlayground("flex-order", "order")

document.getElementById("addItems").onclick = function(){
  console.log('hereee')
  let currentItems = document.querySelectorAll(".playground .container .item");

  if(this.innerHTML.split(" ")[0]==="Add"){
    for(let i=3; i<currentItems.length; i++){
      currentItems[i].style.display = "block";
    }

    this.innerHTML = "Remove Items";
  }else{
    for(let i=3; i<currentItems.length; i++){
      currentItems[i].style.display = "none";
    }

    this.innerHTML = "Add Items";
  }
}
