import React, { useState, useEffect } from "react";
import "./BlogStyle.css";
import ConsoleView from "./ConsoleView";
import AdSpace from "./AdSpace";
import { useImages } from "../../hooks/useImages";

function Arch() {
  const images = useImages();
  const [isUEFI, setIsUEFI] = useState(true);
  const [imageKey, setImageKey] = useState(0);
  useEffect(() => {
    document.title = "Arch - Bios/UEFI";
    setImageKey((prev) => prev + 1);
  }, [isUEFI]);
  const selectUEFI = () => {
    setIsUEFI(true);
  };

  const selectBIOS = () => {
    setIsUEFI(false);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h1 className="text-center mb-4 page-title">
            Guía de Instalación de Arch Linux
          </h1>
          <AdSpace position="top" />
          <ol className="list-group">
            {/* Preparación */}
            <li className="list-group-item">
              <h5>Preparación</h5>
              <ul>
                <li>
                  Descargar la{" "}
                  <a href="https://archlinux.org/download/">
                    Imagen ISO de Arch Linux
                  </a>
                </li>
                <li>
                  Crear un USB booteable con la imagen ISO, puedes usar{" "}
                  <a href="https://rufus.ie/">Rufus</a> o{" "}
                  <a href="https://etcher.balena.io/">Etcher</a>
                </li>
                <li>Arrancar desde el USB</li>
              </ul>
            </li>

            {/* Configuración de red */}
            <li className="list-group-item">
              <h5>Configuración de la red</h5>
              <ul>
                <li>Conectar a Wi-Fi (opcional)</li>
                <ul>
                  <li>
                    Iniciar la interfaz interactiva de <code>iwctl</code>:
                  </li>
                  <ConsoleView command="iwctl" />

                  <li>Verifica que el dispositivo Wi-Fi esté disponible:</li>
                  <ConsoleView command="device list" />

                  <li>Escanea las redes disponibles:</li>
                  <ConsoleView command="station wlan0 scan" />

                  <li>Lista las redes encontradas:</li>
                  <ConsoleView command="station wlan0 get-networks" />

                  <li>
                    Conéctate a la red Wi-Fi (reemplaza SSID por el nombre de la
                    red):
                  </li>
                  <ConsoleView command="station wlan0 connect SSID" />
                  <li>Ingresa la contraseña de la red Wi-Fi.</li>
                  <li>Sal de iwctl</li>
                  <ConsoleView command="exit" />
                </ul>
                <li>Comprobar conectividad</li>
                <ConsoleView command="ping archlinux.org" />
              </ul>
            </li>

            {/* Actualización de Teclado */}
            <li className="list-group-item">
              <h5>Cambia la distribucion de Teclado</h5>
              <ul>
                <ConsoleView command="loadkeys es" />
              </ul>
            </li>
            {/* Verificar la modalidad de arranque */}
            <li className="list-group-item">
              <h5>Verificar la modalidad de arranque</h5>
              <ul>
                <ConsoleView command="cat /sys/firmware/efi/fw_platform_size" />
                <li>
                  Si el comando muestra "64", el sistema se iniciará en modo
                  UEFI de 64 bits. Si muestra "32", también estará en modo UEFI,
                  pero de 32 bits, limitando el gestor de arranque a
                  systemd-boot o GRUB. Si no aparece el directorio, el sistema
                  usará el modo BIOS (o CSM)
                </li>
              </ul>
            </li>

            {/* Instrucciones específicas según el modo de arranque */}
            <li className="list-group-item">
              <h5>Particionar el Disco</h5>
              <div className="boot-mode-buttons">
                <button
                  onClick={selectUEFI}
                  className={`btn btn-primary ${isUEFI ? "" : "btn-outline"}`}
                  disabled={isUEFI}
                >
                  UEFI
                </button>
                <button
                  onClick={selectBIOS}
                  className={`btn btn-primary ${!isUEFI ? "" : "btn-outline"}`}
                  disabled={!isUEFI}
                >
                  BIOS
                </button>
              </div>
              <ul>
                {isUEFI ? (
                  <>
                    <li>Crear las particiones necesarias para UEFI:</li>
                    <ul>
                      <li>
                        Iniciar la herramienta <code>cfdisk</code>:
                      </li>
                      <ConsoleView command="cfdisk" />
                      <li>
                        Seleccionar el tipo de etiqueta GPT (requerido para
                        UEFI).
                        <div className="image-container">
                          <img
                            key={imageKey}
                            src={images.archInstallation.cfdiskUEFI}
                            alt="Arch Linux CFDISK"
                            className="img-fluid"
                          />
                          <div className="image-caption">
                            Vista de cfdisk durante la instalación de Arch Linux
                          </div>
                        </div>
                      </li>
                      <li>Crear las siguientes particiones:</li>
                      <ul>
                        <li>Partición EFI system partition de 1GB(minimo)</li>
                        <li>Partición SWAP de 4GB mínimo</li>
                        <li>
                          Partición raíz (/) para el resto del espacio (mínimo
                          23-32 GiB)
                        </li>
                      </ul>
                      <div className="image-container">
                        <img
                          key={imageKey}
                          src={images.archInstallation.particionesUEFI}
                          alt="Arch Linux particiones"
                          className="img-fluid"
                        />
                        <div className="image-caption">
                          Vista de cfdisk con particiones configuradas
                        </div>
                      </div>
                      <li>
                        Guardar los cambios y salir de <code>cfdisk</code>.
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <li>Crear las particiones necesarias para BIOS:</li>
                    <ul>
                      <li>
                        Iniciar la herramienta <code>cfdisk</code>:
                      </li>
                      <ConsoleView command="cfdisk" />
                      <li>
                        Seleccionar el tipo de etiqueta DOS (requerido para
                        BIOS).
                        <div className="image-container">
                          <img
                            key={imageKey}
                            src={images.archInstallation.cfdiskBios}
                            alt="Arch Linux CFDISK"
                            className="img-fluid"
                          />
                          <div className="image-caption">
                            Vista de cfdisk durante la instalación de Arch Linux
                          </div>
                        </div>
                      </li>
                      <li>Crear las siguientes particiones:</li>
                      <ul>
                        <li>Partición SWAP de 4GB mínimo</li>
                        <li>
                          Partición raíz (/mnt) para el resto del espacio
                          (mínimo 23-32 GiB)
                        </li>
                      </ul>
                      <div className="image-container">
                        <img
                          key={imageKey}
                          src={images.archInstallation.particionesBios}
                          alt="Arch Linux CFDISK"
                          className="img-fluid"
                        />
                        <div className="image-caption">
                          Vista de cfdisk con particiones configuradas
                        </div>
                      </div>
                      <li>
                        Guardar los cambios y salir de <code>cfdisk</code>.
                      </li>
                    </ul>
                  </>
                )}
              </ul>
            </li>

            {/* Formatear particiones */}
            <li className="list-group-item">
              <h5>Formatear las particiones</h5>
              <div className="boot-mode-buttons">
                <button
                  onClick={selectUEFI}
                  className={`btn btn-primary ${isUEFI ? "" : "btn-outline"}`}
                  disabled={isUEFI}
                >
                  UEFI
                </button>
                <button
                  onClick={selectBIOS}
                  className={`btn btn-primary ${!isUEFI ? "" : "btn-outline"}`}
                  disabled={!isUEFI}
                >
                  BIOS
                </button>
              </div>
              <ul>
                <li>Formatear la partición raíz:</li>
                <ConsoleView command="mkfs.ext4 /dev/partición_raiz" />

                <li>Formatear la partición swap:</li>
                <ConsoleView command="mkswap /dev/partición_swap" />

                {isUEFI && (
                  <>
                    <li>Formatear la partición EFI:</li>
                    <ConsoleView command="mkfs.fat -F32 /dev/partición_sistema_efi" />
                  </>
                )}
              </ul>
            </li>

            {/* Montar las particiones */}
            <li className="list-group-item">
              <h5>Montar los sistemas de archivos</h5>
              <div className="boot-mode-buttons">
                <button
                  onClick={selectUEFI}
                  className={`btn btn-primary ${isUEFI ? "" : "btn-outline"}`}
                  disabled={isUEFI}
                >
                  UEFI
                </button>
                <button
                  onClick={selectBIOS}
                  className={`btn btn-primary ${!isUEFI ? "" : "btn-outline"}`}
                  disabled={!isUEFI}
                >
                  BIOS
                </button>
              </div>
              <ul>
                <li>Montar el volumen raíz:</li>
                <ConsoleView command="mount /dev/partición_raiz /mnt" />

                {isUEFI && (
                  <>
                    <li>
                      Para sistemas UEFI, montar la partición del sistema EFI:
                    </li>
                    <ConsoleView command="mount --mkdir /dev/partición_sistema_efi /mnt/boot" />
                  </>
                )}

                <li>Si creó un volumen de intercambio, activarlo:</li>
                <ConsoleView command="swapon /dev/partición_swap" />
                <li>
                  Verifica las particiones con <code>lsblk</code>
                </li>
                <ConsoleView command="lsblk" />
                {isUEFI ? (
                  <>
                    <div className="image-container">
                      <img
                        key={imageKey}
                        src={images.archInstallation.lsblkkUEFI}
                        alt="Arch Linux CFDISK"
                        className="img-fluid"
                      />
                      <div className="image-caption">
                        Vista de las particiones UEFI
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="image-container">
                      <img
                        key={imageKey}
                        src={images.archInstallation.lsblkkBios}
                        alt="lsblk Bios"
                        className="img-fluid"
                      />
                      <div className="image-caption">
                        Vista de las particiones Bios
                      </div>
                    </div>
                  </>
                )}
              </ul>
            </li>

            {/* Instalación del sistema base */}
            <li className="list-group-item">
              <h5>Instalar el sistema base</h5>
              <ul>
                <li>
                  Instalar paquetes esenciales mas el paquete{" "}
                  <code>networkmanager</code> para el internet y{" "}
                  <code>nano</code> para la edicion
                </li>
                <ConsoleView command="pacstrap /mnt base linux linux-firmware networkmanager nano" />
              </ul>
            </li>

            {/* Generar el archivo fstab */}
            <li className="list-group-item">
              <h5>Generar fstab</h5>
              <ul>
                <li>Generar el archivo fstab</li>
                <ConsoleView command="genfstab -U /mnt >> /mnt/etc/fstab" />
              </ul>
            </li>
            {/* Chroot */}
            <li className="list-group-item">
              <h5>Chroot</h5>
              <ul>
                <li>Cambiar la raíz al nuevo sistema:</li>
                <ConsoleView command="arch-chroot /mnt" />
              </ul>
            </li>

            {/* Zona horaria */}
            <li className="list-group-item">
              <h5>Zona horaria</h5>
              <ul>
                <li>Definir su zona horaria:</li>
                <ConsoleView command="ln -sf /usr/share/zoneinfo/Región/Ciudad /etc/localtime" />

                <li>Generar /etc/adjtime:</li>
                <ConsoleView command="hwclock --systohc" />
              </ul>
            </li>

            {/* Idioma del sistema */}
            <li className="list-group-item">
              <h5>Idioma del sistema</h5>
              <ul>
                <li>
                  Edite /etc/locale.gen con <code>nano</code>
                </li>
                <ConsoleView command="nano /etc/locale.gen" />
                <li>Busque y descomente el necesario</li>
                <div className="image-container">
                  <img
                    key={imageKey}
                    src={images.archInstallation.localeconf}
                    alt="Locale.conf"
                    className="img-fluid"
                  />
                  <div className="image-caption">
                    Locale.conf con es_PE.UTF-8 descomentado
                  </div>
                </div>
                <li>
                  Presione <code>ctrl + x</code> para guardar, <code>Y</code>{" "}
                  para confirmar sobrescritura y <code>Enter</code>
                </li>
                <li>Genere los locales ejecutando la orden:</li>
                <ConsoleView command="locale-gen" />
                <div className="image-container">
                  <img
                    key={imageKey}
                    src={images.archInstallation.localegen}
                    alt="Locale-gen"
                    className="img-fluid"
                  />
                  <div className="image-caption">
                    Generando el locale con locale-gen
                  </div>
                </div>
                <li>
                  Cree el archivo <code>/etc/locale.conf</code> y defina la
                  variable <code>LANG</code> descomentada:
                  <ConsoleView command="echo 'LANG=es_PE.UTF-8' > /etc/locale.conf" />
                </li>
                <li>
                  Definir la distribución de teclado y fuente en{" "}
                  <code>/etc/vconsole.conf</code> para que permanezca en cada
                  reinicio:
                  <ConsoleView command="echo 'KEYMAP=es' > /etc/vconsole.conf" />
                </li>
                <li>
                  Puedes verficarlo o editaro con <code>nano</code>
                  <ConsoleView command="nano /etc/locale.conf" />
                  <div className="image-container">
                    <img
                      key={imageKey}
                      src={images.archInstallation.nanolocale}
                      alt="locale.conf"
                      className="img-fluid"
                    />
                    <div className="image-caption">
                      Vista de /etc/locale.conf
                    </div>
                  </div>
                  <ConsoleView command="nano /etc/vconsole.conf" />
                  <div className="image-container">
                    <img
                      key={imageKey}
                      src={images.archInstallation.nanovconsole}
                      alt="vconsole.conf"
                      className="img-fluid"
                    />
                    <div className="image-caption">
                      Vista de /etc/vconsole.conf
                    </div>
                  </div>
                </li>
              </ul>
            </li>

            {/* Configurar la red */}
            <li className="list-group-item">
              <h5>Configurar la red</h5>
              <ul>
                <li>
                  Cree el archivo hostname: <code>/etc/hostname</code> con el
                  nombre de su equipo
                </li>
                <ConsoleView command="echo nombredesuequipo > /etc/hostname" />
                Puedes verficarlo o editaro con <code>nano</code>
                <ConsoleView command="nano /etc/hostname" />
                <div className="image-container">
                  <img
                    key={imageKey}
                    src={images.archInstallation.nanohostname}
                    alt="hostname"
                    className="img-fluid"
                  />
                  <div className="image-caption">Vista de /etc/hostname</div>
                </div>
                <li>
                  Configura el archivo <code>/etc/hosts</code> para asociar el
                  nombre de host con la dirección IP local:
                  <pre className="alert alert-dark">
                    127.0.0.1         localhost <br />
                    ::1               localhost <br />
                    127.0.0.1         nombredesuequipo.localdomain nombredesuequipo
                    <br />
                  </pre>
                  Puedes editarlo con <code>nano</code>:
                  <ConsoleView command="nano /etc/hosts" />
                  <div className="image-container">
                    <img
                      key={imageKey}
                      src={images.archInstallation.nanohosts}
                      alt="hosts"
                      className="img-fluid"
                    />
                    <div className="image-caption">Vista de /etc/hosts</div>
                  </div>
                </li>
              </ul>
            </li>

            {/* Initramfs */}
            <li className="list-group-item">
              <h5>3.6 Initramfs</h5>
              <ul>
                <li>
                  Para LVM, cifrado del sistema o RAID, regenere la imagen
                  initramfs:
                </li>
                <ConsoleView command="mkinitcpio -P" />
              </ul>
            </li>

            {/* Contraseña de root */}
            <li className="list-group-item">
              <h5>Contraseña de root</h5>
              <ul>
                <li>Establecer la contraseña de root:</li>
                <ConsoleView command="passwd" />
              </ul>
            </li>

            {/* Configuración de GRUB */}
            <li className="list-group-item">
              <h5>Instalar y configurar GRUB</h5>
              {/* Selección de UEFI o BIOS */}
              <div className="boot-mode-buttons">
                <button
                  onClick={selectUEFI}
                  className={`btn btn-primary ${isUEFI ? "" : "btn-outline"}`}
                  disabled={isUEFI}
                >
                  UEFI
                </button>
                <button
                  onClick={selectBIOS}
                  className={`btn btn-primary ${!isUEFI ? "" : "btn-outline"}`}
                  disabled={!isUEFI}
                >
                  BIOS
                </button>
              </div>

              <ul>
                {isUEFI ? (
                  <>
                    <li>Instalar GRUB para UEFI</li>
                    <ConsoleView command="pacman -S grub efibootmgr" />
                    <li>Instalar GRUB en el disco</li>
                    <ConsoleView command="grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=Arch" />
                  </>
                ) : (
                  <>
                    <li>Instalar GRUB para BIOS</li>
                    <ConsoleView command="pacman -S grub" />
                    <li>Instalar GRUB en el disco</li>
                    <ConsoleView command="grub-install /dev/sda" />
                  </>
                )}
                <li>Generar el archivo de configuración de GRUB</li>
                <ConsoleView command="grub-mkconfig -o /boot/grub/grub.cfg" />
              </ul>
            </li>
            {/* Activar NetworkManager */}
            <li className="list-group-item">
              <h5>Activar NetworkManager</h5>
              <ul>
                <li>
                  Habilita <code>NetworkManager</code> para gestionar las
                  conexiones de red automáticamente al iniciar el sistema:
                </li>
                <ConsoleView command="systemctl enable NetworkManager" />
              </ul>
            </li>
            {/* Crear un nuevo usuario */}
            <li className="list-group-item">
              <h5>Crear un nuevo usuario</h5>
              <ul>
                <li>
                  Crear un usuario con el comando <code>useradd</code>. Cambia
                  <code>nombredeusuario</code> por el nombre del usuario que
                  desees:
                </li>
                <ConsoleView command="useradd -m nombredeusuario" />
                <li>Establecer una contraseña para el nuevo usuario:</li>
                <ConsoleView command="passwd nombredeusuario" />
              </ul>
            </li>

            {/* Configuración de sudo */}
            <li className="list-group-item">
              <h5>Configurar sudo</h5>
              <ul>
                <li>
                  Instala el paquete <code>sudo</code> si aún no está instalado:
                </li>
                <ConsoleView command="pacman -S sudo" />
                <li>
                  Edita el archivo de configuración de sudo para otorgar
                  permisos a los usuarios del grupo <code>wheel</code>:
                </li>
                <ConsoleView command="nano /etc/sudoers" />
                <li>
                  En el archivo <code>/etc/sudoers</code>, busca la línea
                  siguiente y quítale el comentario:
                  <pre className="alert alert-dark">
                    %wheel ALL=(ALL:ALL) ALL
                  </pre>
                  <div className="image-container">
                    <img
                      key={imageKey}
                      src={images.archInstallation.nanosudoers}
                      alt="nanosudoers"
                      className="img-fluid"
                    />
                    <div className="image-caption">
                      Editando el archivo de configuración de sudo
                    </div>
                  </div>
                </li>
                <li>
                  Guarda y cierra el archivo para aplicar la configuración de
                  sudo.
                </li>
              </ul>
            </li>

            {/* Agregar usuario al grupo wheel */}
            <li className="list-group-item">
              <h5>Agregar usuario al grupo wheel</h5>
              <ul>
                <li>
                  Finalmente, agrega el usuario al grupo <code>wheel</code> para
                  otorgarle permisos de sudo:
                </li>
                <ConsoleView command="usermod -aG wheel nombredeusuario" />
              </ul>
            </li>
            {/* Salir de la instalación y reiniciar */}
            <li className="list-group-item">
              <h5>Salir de la instalación y reiniciar el sistema</h5>
              <ul>
                <li>
                  Sal de la sesión con <code>crtl + D</code>:
                </li>
                <li>
                  Finalmente, reinicia el sistema para completar la instalación:
                </li>
                <ConsoleView command="reboot" />
                <li>
                  Retira el medio de instalación cuando el sistema comience a
                  reiniciar.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <AdSpace position="bottom" />
    </div>
  );
}

export default Arch;
