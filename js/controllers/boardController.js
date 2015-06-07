/*
 *  Controller for tabs in the templatemanger section
 */
var totalPls=0;
var playesIds=[];
var totallimit=0;
app.controller('tabsTemplateManagerCtrl', function($scope, $location) {
	
	$scope.players = [];
	$scope.playerNames=[];
	$scope.totalPlayers =0;
	$scope.addNewPlayer = function(player) {
		playesIds.push(player.name);
		$scope.totalPlayers=$scope.totalPlayers+1;
		$scope.playerNames.push({ 'name':player.name });
		$scope.name='';
		$scope.score='';
		$scope.name=player.name;
		$scope.players.push({ 'name':$scope.name, 'score': $scope.score });
		$scope.name='';
		$scope.score='';
		player.name='';
		totalPls=$scope.totalPlayers;
		totallimit=player.limit;
		
		
	};
	$scope.myRowIndex=0
	$scope.addNewRow = function() {
		$scope.myRowIndex=$scope.myRowIndex+1;
		$("#tablerows").append('<tr id="tablebody_'+$scope.myRowIndex+'"></tr');
		for(var index=0;index<$scope.totalPlayers;index++){
			$("#tablebody_"+$scope.myRowIndex).append('<td id="rowlast'+$scope.myRowIndex+'"  class="ng-scope"><input  class="form-control inputrow ng-pristine ng-invalid ng-invalid-required tq-validate" type="text" tq-validate-after="" required="" ng-model="user.partyType"></td>');
		}
		$("#tablebody_"+$scope.myRowIndex).append('<td><button class="btn btn-outline btn-primary btn-xs "  type="button" onclick="roundTotals('+$scope.myRowIndex+')">'+$scope.myRowIndex +' Round</button><button id="winner_'+$scope.myRowIndex+'" class="btn btn-outline btn-primary btn-xs hideBtn"  type="button"></button></td>');
	};
});

function roundTotals(roundIndex){
		for(var j = 0; j <playesIds.length; j++)
		{		
				$("td  .inputrow").each(function(index, obj) {
					var total = 0;
					if(j=0){
						console.log(index+" ---- "+j);
						total=parseInt($("#"+playesIds[j]).val()) +parseInt($(this).val());
						$("#"+playesIds[j]).val(total);
					}
					//console.log(index+" ---- "+j);
					// if($(this).parent().parent().attr('id').split('_')[1]==roundIndex){
 					 	// total=parseInt($("#"+playesIds[j]).val()) +parseInt($(this).val());
					// }
					if(j=index){
							//console.log(index+" "+j);
							//console.log($(this));
							if($(this).val()==0){
								$("#winner_"+roundIndex).text("winner- "+playesIds[j]);
							}
							
							
							if($(this).val() ==""){
								$(this).val() =0;
							}
						total=parseInt($("#"+playesIds[j]).val()) +parseInt($(this).val());
						//console.log(total);
						$("#"+playesIds[j]).val(total);
					}
					$(this).attr('readonly', true);
					$(this).removeClass('inputrow');
					$("#winner_"+roundIndex).addClass('showBtn');
					
				});
		}
		if(totallimit !=="" && typeof(totallimit) !="undefined"){
			$("th  .totalip").each(function(index, obj) {
	  				//console.log($(this).val());
	  				if(parseInt($(this).val()) >=totallimit)
	  				{
	  					$(this).css({ 'border' : '1px solid red', 'color' : 'red' })
	  				}
			});
		}
		
	}