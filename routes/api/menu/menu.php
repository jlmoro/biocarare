<?php
use App\Http\Controllers\MenuController;

Route::group(['middleware' =>'auth:api'], function (){
  Route::prefix('menu-principal')->group( function(){
    // $controlador = [MenuController::class];
    Route::get("listar-menu",[MenuController::class,'listar_menu']);
  });
});
