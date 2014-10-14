CKEDITOR.plugins.add( 'timestamp',
{
	init: function( editor )
	{
		// Add command. This gets executed when the button is clicked.
		editor.addCommand( 'insertTimestamp',
		{
			exec : function( editor )
			{    
				var timestamp = new Date();
				editor.insertHtml( 'The current date and time is: <em>' + timestamp.toString() + '</em>' );
			}
		});
		
		// Add button.
		editor.ui.addButton( 'Timestamp',
		{
			label: 'Insert Timestamp',
			command: 'insertTimestamp',
			icon: this.path + 'images/timestamp.png'
		});
	}
} );