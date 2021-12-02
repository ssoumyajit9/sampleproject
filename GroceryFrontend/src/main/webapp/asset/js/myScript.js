$(function(){
	/*product data tables*/
	var $table = $('#productTable') ;
	
        if($table.length)
          {
	
		var jsonUrl = '';
		if (window.categoryId == '') {
			jsonUrl = window.contextRoot + '/json/data/all/products';
		} else {
			jsonUrl = window.contextRoot + '/json/data/category/'
					+ window.categoryId + '/products';
		}
		
	        	$table.DataTable({
				lengthMenu : [ [ 3, 5, 10, -1 ],[ '3 Items', '5 Items', '10 Items', 'ALL' ] ],
				pageLength : 5,
			
			  	ajax : {
				    		url : jsonUrl,
                   			dataSrc : ''
					},
			 	columns : [ 
				         { 
					       data2 :'id',
					       data : 'code',
                     	bSortable : false,
                         mRender : function(data, type, row) {

								return '<img src="' + window.contextRoot
										+ '/rs/images/' + data
										+ '.jpg"  class="dataTableImg"/> ';
                                 
							}
                         },
				         {
					       data : 'name'
				         },
                         {
	                       data : 'brand'
                         },
                         {
					       data : 'unitPrice',
                           mRender : function(data,type,row){
	                             return '&#8377;' + data
                                  }
				         },
                         {
	                       data : 'quantity'
                         },
                         {
	                      data :'id',
                        
                        bSortable : false,
                      
                        mRender : function(data, type, row) {

			     var str = '';
					str += '<a href="'
						+ window.contextRoot
						+ '/product/show/'
						+ data
						+ '/product" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"></span></a> &#160;';

					str += '<a href="#" class="btn btn-warning"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
					

					return str;

				}
                         }
			           ] 
			     });
          }




/*Admin dataTables*/
var $admintable = $('#adminProductsTable') ;
	
        if($admintable.length)
          {
	
		var jsonUrl = '';
		
			jsonUrl = window.contextRoot + '/json/data/admin/all/products';
		
		
	        	$admintable.DataTable({
				lengthMenu : [ [ 3, 5, 10, -1 ],[ '3 Items', '5 Items', '10 Items', 'ALL' ] ],
				pageLength : 5,
			
			  	ajax : {
				    		url : jsonUrl,
                   			dataSrc : ''
					},
			 	columns : [ 
				         { data : 'id'},
				         { 
					       data : 'code',
                     	bSortable : false,
                         mRender : function(data, type, row) {

								return '<img src="' + window.contextRoot
										+ '/rs/images/' + data
										+ '.jpg" class="dataTableImg"/>';

							}
                         },
				         {
					       data : 'name'
				         },
                         {
	                       data : 'brand'
                         },
                         {
	                       data : 'quantity'
                         },
                         {
					       data : 'unitPrice',
                           mRender : function(data,type,row){
	                             return '&#8377;' + data
                                  }
				         },
                       
                         {
	                      data :'active',
                            bSortable : false,
								mRender : function(data, type, row) {
									var str = '';
									if (data) {
										str += '<label class="switch"> <input type="checkbox" value="'
												+ row.id
												+ '" checked="checked">  <div class="slider round"> </div></label>';

									} else {
										str += '<label class="switch"> <input type="checkbox" value="'
												+ row.id
												+ '">  <div class="slider round"> </div></label>';
									}

									return str;
								}
                         },
                        {
	                      data :'id',
                           bSortable : false,
								mRender : function(data, type, row) {

									var str = '';
									str += '<a href="'
											+ window.contextRoot
											+ '/manage/'
											+ data
											+ '/product" class="btn btn-primary">EDIT</a> &#160;';

									return str;
								}
                         }

                          

			           ] ,
                   
 initComplete : function() {
						var api = this.api();

						api
								.$('.switch input[type = "checkbox"]')
								.on(
										'change',
										function() {

											var checkbox = $(this);
											var checked = checkbox
													.prop('checked');
											var msg = (checked) ? 'You want to activate the product?'
													: 'You want to deactivate the product?';
											var value = checkbox.prop('value');
											console.log(value);
											bootbox
													.confirm({
														size : 'medium',
														title : 'Product Activation/Deactivation',
														message : msg,
														callback : function(
																confirmed) {
															if (confirmed) {
																var activeurl = window.contextRoot
																		+ '/manage/product/'
																		+ checkbox
																				.prop('value')
																		+ '/activation';
																$
																		.post(
																				activeurl,
																				function(
																						data) {
																					bootbox
																							.alert({
																								size : 'medium',
																								title : 'Information',
																								message : data,

																							});
																				})

															} else {
																checkbox
																		.prop(
																				'checked',
																				!checked);
															}
														},
													});
										});
					}





			     });
          }



});