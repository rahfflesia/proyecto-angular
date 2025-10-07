import { Component, inject } from '@angular/core';
import { FullscreenOverlay } from '../../../directivas/fullscreen-overlay';
import { CambiarContrasena } from '../../modals/cambiar-contrasena/cambiar-contrasena';
import { Modals } from '../../../servicios/modals';
import { LogroPreview } from '../../preview-components/logro-preview/logro-preview';
import { EditProfileModal } from '../../modals/edit-profile-modal/edit-profile-modal';
import { FeedCard } from '../../cards/feed-card/feed-card';
import { ModalLogrosUsuario } from '../../modals/modal-logros-usuario/modal-logros-usuario';
import { ModalInfoPersonal } from '../../modals/modal-info-personal/modal-info-personal';

@Component({
  selector: 'app-perfil',
  imports: [
    FullscreenOverlay,
    CambiarContrasena,
    LogroPreview,
    EditProfileModal,
    FeedCard,
    ModalLogrosUsuario,
    ModalInfoPersonal,
  ],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  modalTogller = inject(Modals);
  isChangeUsernameModalVisible: boolean = false;
  isChangePasswordModalVisible: boolean = false;
  isChangeUserInfoVisible: boolean = false;
  isEditProfileModalVisible: boolean = false;
  isOwnProfile: boolean = false;
}
