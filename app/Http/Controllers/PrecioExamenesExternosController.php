<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PrecioExamenesExternos;

class PrecioExamenesExternosController extends Controller
{
    public function listar_precio_examenes_externos()
    {
      try {

        

      } catch (\Exception $e) {
        return $this->captura_error($e,"error al listar precios examenes");
      }

    }
}
