<?php
use App\Http\Controllers\PrecioExamenesExternosController;

Route::group(['middleware' =>'auth:api'], function (){
  Route::prefix('precio-examenes')->group( function(){
    // $controlador = [MenuController::class];
    Route::get("listar-precio-examenes-externos",[PrecioExamenesExternosController::class,'listar_precio_examenes_externos']);
  });
});
