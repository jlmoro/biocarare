<?php
use App\Http\Controllers\PrecioExamenesExternosController;

Route::group(['middleware' =>'auth:api'], function (){
  Route::prefix('precio-examenes')->group( function(){
    // $controlador = [MenuController::class];
    Route::get("listar-precio-examenes-externos",[PrecioExamenesExternosController::class,'listar_precio_examenes_externos']);
    Route::post("registrar-precio-examen-externo",[PrecioExamenesExternosController::class,'registrar_precio_examen_externo']);
    Route::put("editar-precio-examen-externo",[PrecioExamenesExternosController::class,'editar_precio_examen_externo']);
    Route::put("{id_examen}/cambiar-estado",[PrecioExamenesExternosController::class,'cambiar_estado']);
    Route::delete("{id_examen}/eliminar-examen",[PrecioExamenesExternosController::class,'eliminar_examen']);
  });
});
