import archLinuxBiosCfdisk from '../assets/img/Arch_Installation/ArchLinuxBios_cfdisk.jpg';
import archLinuxUEFICfdisk from '../assets/img/Arch_Installation/ArchLinuxUEFI_cfdisk.jpg';
import ArchLinuxUEFIParticiones from '../assets/img/Arch_Installation/ArchLinuxUEFI_Particiones.jpg';
import ArchLinuxBiosParticiones from '../assets/img/Arch_Installation/ArchLinuxBios_Particiones.jpg';
import ArchLinuxUEFIlsblk from '../assets/img/Arch_Installation/ArchLinuxUEFI_lsblk.jpg';
import ArchLinuxBioslsblk from '../assets/img/Arch_Installation/ArchLinuxBios_lsblk.jpg';
import ArchLinuxlocaleconf from '../assets/img/Arch_Installation/ArchLinuxlocaleconf.jpg';
import ArchLinuxlocalegen from '../assets/img/Arch_Installation/ArchLinuxlocale-gen.jpg';
import ArchLinuxnanolocale from '../assets/img/Arch_Installation/ArchLinuxnanolocale.jpg';
import ArchLinuxnanovconsole from '../assets/img/Arch_Installation/ArchLinuxnanovconsole.jpg';
import ArchLinuxnanohostname from '../assets/img/Arch_Installation/ArchLinuxnanohostname.jpg';
import ArchLinuxnanohosts from '../assets/img/Arch_Installation/ArchLinuxnanohosts.jpg';
import ArchLinuxnanosudoers from '../assets/img/Arch_Installation/ArchLinuxnanosudoers.jpg';








export const useImages = () => {
  return {
    archInstallation: {
      cfdiskBios: archLinuxBiosCfdisk,
      cfdiskUEFI: archLinuxUEFICfdisk,
      particionesUEFI : ArchLinuxUEFIParticiones,
      particionesBios : ArchLinuxBiosParticiones,
      lsblkkUEFI : ArchLinuxUEFIlsblk,
      lsblkkBios : ArchLinuxBioslsblk,
      localeconf: ArchLinuxlocaleconf,
      localegen: ArchLinuxlocalegen,
      nanolocale: ArchLinuxnanolocale,
      nanovconsole: ArchLinuxnanovconsole,
      nanohostname: ArchLinuxnanohostname,
      nanohosts: ArchLinuxnanohosts,
      nanosudoers: ArchLinuxnanosudoers,
    }
  };
};