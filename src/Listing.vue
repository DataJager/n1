
<template>
    <div class="listing">
        <input v-model="address" class="address" placeholder="No Address" >
        <div class="photo">
        <carousel :per-page="1">
          <slide>
          <img src="images/1.jpg"/>

          </slide>

          <slide>
          <img src="images/2.jpg"/>

          </slide>

          <slide>
          <img src="images/3.jpg"/>

          </slide>

          <slide>
          <img src="images/4.jpg"/>

          </slide>

          <slide>
          <img src="images/5.jpg"/>

          </slide>

        </carousel>

        </div>
        <ul>
        <li v-for="item in items" class="lower">
        <div class="icon"><img v-if="hasIcon(item.name)" v-bind:src="iconify(item.name)" height=42 width=42>
        <span v-else>{{ capitalizeFirstLetter(item.name) }} </span> <div class="value"> {{ item.value }}</div></div>
        </li>
        </ul>

    </div>
</template>
<script>
  export default{
    data: function(){
    return {
      counter: 1,
      address: "123 Fake Street",
      path: "",
      items:[
         {name: "bedrooms", value: 5,},
         {name: "bathrooms", value: 2.5,},
         {name: "tile", value: "Throughout"},
         {name: "pool", value: "25 ft by 10 ft"},
         ],
      }
    },
    methods: {
    	capitalizeFirstLetter: function(s){
      return s.charAt(0).toUpperCase() + s.substr(1);
      },
      iconify: function(name) {
              name += '.png';
              return name;
      },
      hasIcon: function(name){
         var img = new Image();
         img.src = "./" + name + ".png";
         console.log(img.src);
         if (img.height !=0){
            return true;
         }
         else{
            return false;
         }
      },
    },
  };
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

div.listing{
font-family: 'Montserrat', sans-serif;
    background-color: #80aaff;
    margin: 10px;
    border-radius: 25px;
}
div.photo{
  text-align: center;

  height: 720px;
  border: black solid 1px;

}
.photo img{

height: 640px;
width: 100%;

}
input.address{
    border-radius: 25px;
    background-color: white;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    height: 50px;
    width: 670px;
    float: center;
    text-align: center;
    font-size: 2em;
    border-width: 1px;
    border-style-top: solid;
    border-style-right: double;
    border-style-bottom: solid;
    border-style-left: double;
    border-color: black;
}
ul{
list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #6699ff;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}
li{
float: left;
}
li.lower{
margin-left: 20px;
display: block;
text-align: center;
color: black;
width: 150px;
height: 100px;
float: left;
}

</style>
