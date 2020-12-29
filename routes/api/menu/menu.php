<?php
Route::group(['middleware' =>'auth:api'], function (){
  Route::prefix('menu')->group( function(){
    $controlador = "MenuController";
    Route::get("listar-menu","$controlador@listar_menu");
    // Route::post("crear-proveedor","$controlador@crear_proveedor");
    // Route::put("editar-proveedor","$controlador@editar_proveedor");
    // Route::delete("{id_proveedor}/eliminar-proveedor","$controlador@eliminar_proveedor");
  });
});
