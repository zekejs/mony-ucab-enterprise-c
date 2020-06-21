import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperacionService } from '../../servicios/operacion/operacion.service';
import { OperacionMonedero } from '../../models/operacionMonedero.model';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { CuentaService } from '../../servicios/cuenta/cuenta.service';
import { Usuario } from '../../models/usuario.model';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-operacion-detalle-m',
  templateUrl: './operacion-detalle-m.page.html',
  styleUrls: ['./operacion-detalle-m.page.scss'],
})
export class OperacionDetalleMPage implements OnInit {

  operacion: OperacionMonedero;
  user: string;
  idreceptor: number;
  usuario: Usuario;
  fecha: any;

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _operacionServices: OperacionService,
    public _usuarioServices: UsuarioService,
    public _cuentaServices: CuentaService,
    public router: Router,
    public alert: AlertController,
  ) { }

  ngOnInit() {

    this._activatedRoute.paramMap.subscribe(paramMap => {
      const recipeID = paramMap.get('operacionID');
      let id: number = +recipeID;
      this.operacion = this._operacionServices.getoperacionMonedero(id);
      console.log(this.operacion);
    });
    this.usuario = this._usuarioServices.getUsuario();
    this._usuarioServices.inforUsurio(this.operacion.idusuario)
    .subscribe((data: any) => {
      this.user = data.usuario;
      this.idreceptor = data.idusuario;
    });
    this.fecha = this.operacion.fecha.split('T', 1 );
  }


}
