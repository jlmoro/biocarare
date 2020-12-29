<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  public function ejecutar_sql(string $archivo_sql)
  {
    if (gettype($archivo_sql) == 'string') {
      return \File::get((base_path("database/sql/$archivo_sql.sql")));
    }else {
      dd('revisar ruta al archivo sql');
    }
  }

  public function captura_error($e,$mensaje=null)
  {
    $tmp=[
      'url_origen'=>url()->previous(),
      'url_destino'=>url()->current(),
      'mensaje'=>$e->getMessage(),
      'mensaje_personalizado'=>$mensaje,
      'error'=>substr($e,0,1999),
      'archivo'=>$e->getFile(),
      'linea'=>$e->getLine(),
      'parametros'=>json_encode(request()->all()),
      // 'traza'=>json_encode($e->getTrace()),
      // 'created_by'=>auth()->user()->id,
    ];

    if (auth()->check()) {
      $tmp['created_by']=auth()->user()->id;
    }

    // $errores = Errores::create($tmp);

    return [
      'error'=>$mensaje??config('domains.error.general'),
      'error2'=>"{$e->getMessage()} - en la lÃ­nea: {$e->getLine()}",
      'error3'=>"{$e->getFile()} - en la lÃ­nea: {$e->getLine()}",
      // 'error4'=>$e->getTrace(),
      // 'error5'=>"Reportado en {$errores->id}",
    ];
  }

}
