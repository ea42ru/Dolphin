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
          height: 240,
          padding: 0,
          margin: 0,
          type: "clean",
          cols: [
            {},
            { 
              view: "template", 
              width: 200,
              template: "<div><img src=data/avatara.jpeg></div>"
            },
            {}
          ]
         },

        {
          view: "layout",
          height: 80,
          cols: [
            {},
            {
              view:"template",
              width: 600,
              css: "my_name",
              template: param.name
            },
            {}
          ]
        },

        {
          view: "template", 
          height: 90,
          css: "my_spec",
          template: param.spec
        },

        {
          view: "template", 
          height: 200,
          css: "my_font",
          template: param.about
        },
        
        {},

        {
          view: "layout",
          type: "clean",
          height: 120,
          padding: 10,
          cols: [
            {},
            {
              view:"button",
              template: "<div><img src=form/ico/item.png></div>",
              on: {
                onSelectChange: function(){
                  $$("soc_msg").clearAll();
                  $$("soc_msg").Val({view:"template", template: "<div><img src=form/ico/viber.png></div>"});
                  $$("soc_msg").refresh();
                }
              }
            },

            { 
              view: "button",
              template: "<div><img src=form/ico/mail.png></div>",
              click: function(){$$("soc_msg").setHTML(param.soc["mail"])}
            },

            {
              view: "button",
              template: "<div><img src=form/ico/github.png></div>",
              click: function(){$$("soc_msg").setHTML(param.soc["github"])}
            },

            {
              view: "button",
              template: "<div><img src=form/ico/telegram.png></div>",
              click: function(){$$("soc_msg").setHTML(param.soc["telegram"])}
            },

            {
              view: "button",
              template: "<div><img src=form/ico/skype.png></div>",
              click: function(){$$("soc_msg").setHTML(param.soc["skype"])}
            },

            {
              view: "button",
              template: "<div><img src=form/ico/viber.png></div>",
              click: function(){$$("soc_msg").setHTML(param.soc["viber"])}
            },



            {}
          ]
        },

        {
          view: "layout",
          height: 80,
          type: "clean",
          cols: [
            {},
            {
              view: "template",
              id:"soc_msg",
              css: "my_font"
            },
            {}
          ]
		},

        {
          view:"template",
          template: param.copyright
         }
      ]
    }  
  ]
};

webix.ui(mi);
}

function onClickItem(ItemName) {
  $$("soc_msg").setHTML(param[ItemName])
}

function onRedirectItem(dataRedir) {
  var loc = window.location;
  dataResp = loc.protocol + "//" + loc.host + dataRedir;
  loc.replace(dataResp);
}

