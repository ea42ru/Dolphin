function run() {
var mi = {
  view: "layout",
  css: "my_font",
  type: "clean",
  cols: [
    {
      view: "template", 
      template: "<div class=my_imageback></div>"
    },
    {
      view: "layout",
      width: 600,
      type: "clean",
      padding: 45,
      rows: [
        {
         view: "layout",
         height: 200,
         padding: 0,
         margin: 0,
         type: "clean",
         cols: [
            {},
            {view:"template", 
             width: 200,
             template: "<div><img src=data/avatara.jpeg></div>"},
            {}
         ]
         },
        {
         view: "layout",
         height: 80,
         cols: [
          {},
          {view:"template",
           width: 600,
           css: "my_name",
           template:"Евтюшкин Алексей"},
           {}
         ]
         },

        {view:"template", 
         id:"my_spec",
         height: 90,
         css: "my_spec",
         template:"— программист, инженер-электронщик, ..."},

        {view:"template", 
         height: 300,
         css: "my_font",
         template:"Равным образом консультация с широким активом требуют определения и уточнения модели развития. Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия. Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. И просто хороший человек!"},
        
        {view:"template",
         height: 50,
         template:"соц"},

        {}
      ]
    }
  ]
  };

webix.ui(mi);

var tt = '{view:"template", template:"eeeeee"};';
$$("my_spec").Val(tt);
$$("my_spec").reinit();
}
