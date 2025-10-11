import { Component, inject } from '@angular/core';
import { FullscreenOverlay } from '../../../directivas/fullscreen-overlay';
import { CambiarContrasena } from '../../modals/cambiar-contrasena/cambiar-contrasena';
import { Modals } from '../../../servicios/modals';
import { LogroPreview } from '../../preview-components/logro-preview/logro-preview';
import { EditProfileModal } from '../../modals/edit-profile-modal/edit-profile-modal';
import { FeedCard } from '../../cards/feed-card/feed-card';
import { ModalLogrosUsuario } from '../../modals/modal-logros-usuario/modal-logros-usuario';
import { ModalInfoPersonal } from '../../modals/modal-info-personal/modal-info-personal';
import { NavigationService } from '../../../servicios/navigation';

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
    CambiarContrasena,
  ],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  modalToggler = inject(Modals);
  navigation = inject(NavigationService);

  isChangeUsernameModalVisible: boolean = false;
  isChangePasswordModalVisible: boolean = false;
  isChangeUserInfoVisible: boolean = false;
  isEditProfileModalVisible: boolean = false;
  isAchievementsModalVisible: boolean = false;
  isUsersAchievementsModalVisible: boolean = false;
  isOwnProfile: boolean = false;
}
