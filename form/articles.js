function run() {
var mi = {
  view: "layout",
  css: "my_font",
  type: "clean",
  cols: [
    {
      view: "template",
      width: 20
    },

    {
      view: "layout",
      width: 250,
      type: "clean",
      padding: 30,
      rows: [ 
		{
          view: "button", 
		  value: "На главную", 
		  css:"bt_1",
          height: 60,
          click: function(){onRedirectItem("/index.html")}
		}
      ]
    },

    {
      view: "template",
      width: 30
    },

    {
      view: "layout",
      minwidth: 100,
      maxwidth: 900,
      type: "clean",
      rows: [ 
        
		{
          view: "template",
          height: 50
		},
		
		{
          view: "template",
          css: "my_font",
          scroll: "auto",
		  template: param_articles.main
		}
		
      ]
    },

    {
      view: "template",
      width: 30
    }
  ]
};

for (var i=0; i<=param_articles.list.length-1; i++) {
  addButton(param_articles.list[i].name, param_articles.list[i].path, mi.cols[1].rows);
}
addButton("HTML редактор", "html-redaktor", mi.cols[1].rows);

webix.ui(mi);
}

var button_proto = {
  view: "button", 
  css: "bt_1",
  value: "", 
  height: 60,
  redir: "", 
  click: function(){onRedirectItem("/data/"+this.data.redir+"/index.html")}
}

function addButton(name, path, massiv) {
  button_add = Object.create(button_proto);	
  button_add.value = name;
  button_add.redir = path;
  massiv.push(button_add);
}
function onRedirectItem(dataRedir) {
  var loc = window.location;
  dataResp = loc.protocol + "//" + loc.host + dataRedir;
  loc.replace(dataResp);
}

