<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PrecioExamenesExternos;
use DB;

class PrecioExamenesExternosController extends Controller
{
  public function listar_precio_examenes_externos()
  {
    try {

      return PrecioExamenesExternos::select('id','codigo','nombre_examen','precio','estado')
      ->whereNull('deleted_at')
      ->orderBy('nombre_examen','ASC')
      ->get();

    } catch (\Exception $e) {
      return $this->captura_error($e,"error al listar precios examenes");
    }

  }

  public function registrar_precio_examen_externo(Request $request)
  {
    try {
      return DB::transaction(function() use($request){
        // dd($request->all());
        PrecioExamenesExternos::create([
          'codigo'=>$request->codigo,
          'nombre_examen'=>$request->nombre_examen,
          'precio'=>$request->precio
        ]);

        return [
          'mensaje'=>config('domains.mensajes.creado')
        ];

      },5);
    } catch (\Exception $e) {
      return $this->captura_error($e,"error al registrar examen");
    }

  }
}
