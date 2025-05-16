import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';

@Component({
  selector:'app-qr',
  templateUrl: './qr.page.html',
  standalone:false
})
export class QrPage {
  scanResult: string | null = null;

  constructor() {}

  async scan() {
    // if (!Capacitor.isNativePlatform()) {
    //   alert('Solo disponible en dispositivo móvil.');
    //   return;
    // }

    try {

      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: 0,
        scanInstructions: 'Acerca tu equipo al código QR',
        scanText: 'Escaneando...',
        cameraDirection: 1,
        scanOrientation: 3,
        scanButton: true,
        web: {
          showCameraSelection: true,
        }
      });

      this.scanResult = result.ScanResult;

    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }
}
