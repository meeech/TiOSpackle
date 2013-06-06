require('com.meeech.tiospackle');

var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

win.open();

var tint = Ti.UI.createButton({
  title: 'Tint Toolbar!'
  , style: Ti.UI.iPhone.SystemButtonStyle.DONE
});

var toolbar = Ti.UI.iOS.createToolbar({
  items:[tint],
  // tintColor: '#0f0',
  bottom:0,
  borderTop:true,
  borderBottom:false
});

win.add(toolbar);

tint.addEventListener('click', function(e) {
	console.log( '->Tint toolbar' );
	toolbar.tintColor = '#0f0';	
});

