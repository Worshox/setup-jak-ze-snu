import karton1Image from '$lib/assets/img/karton-1.webp';
import karton2Image from '$lib/assets/img/karton-2.webp';
import karton3Image from '$lib/assets/img/karton-3.webp';
import karton4Image from '$lib/assets/img/karton-4.webp';
import karton5Image from '$lib/assets/img/karton-5.webp';

export function load({ getClientAddress }) {
	const trashDate = new Date('2025-05-13T23:59:59');

	return {
		taskbarInfo: {
			ip: getClientAddress(),
			dateTime: new Date()
		},
		trash: [
			{
				image: karton1Image,
				name: 'Karton po monitorze LG 27GX790A-B - 27&prime;&prime; | OLED | QHD | 0.03 ms | 480 Hz',
				date: trashDate,
				size: '605.2 mm &times; 579.3 mm &times; 249.1 mm'
			},
			{
				image: karton2Image,
				name: 'Karton po podkładce KRUX Space Carpet MAX',
				date: trashDate,
				size: '120 cm &times; 60 cm &times; 3 mm'
			},
			{
				image: karton3Image,
				name: 'Karton po ramieniu ENDORFY Atlas Double',
				date: trashDate,
				size: '806 mm &times; 935 mm &times; 418 mm'
			},
			{
				image: karton4Image,
				name: 'Karton po procesorze AMD Ryzen 7 9800X3D',
				date: trashDate,
				size: '-'
			},
			{
				image: karton5Image,
				name: 'Karton po pamięci RAM Adata XPG LancerBlade 64GB [4x16GB 6000MHz DDR5 CL30 DIMM]',
				date: trashDate,
				size: '33.8 mm &times; ? &times; ?'
			},
			{
				image: karton1Image,
				name: 'Karton po płycie głównej ASRock B850 Riptide WiFi',
				date: trashDate,
				size: '244 mm &times; 305 mm &times; ?'
			},
			{
				image: karton2Image,
				name: 'Karton po obudowie NZXT H6 Flow czarna',
				date: trashDate,
				size: '287 mm &times; 435 mm &times; 415 mm'
			},
			{
				image: karton3Image,
				name: 'Karton po wentylatorze NZXT F120 RGB 120 mm czarny',
				date: trashDate,
				size: '26 mm &times; 120 mm &times; 120 mm'
			},
			{
				image: karton4Image,
				name: 'Karton po zasilaczu NZXT C1200 V2 1200W 80+ Gold ATX 3.0',
				date: trashDate,
				size: '150 mm &times; 150 mm &times; 86 mm'
			},
			{
				image: karton5Image,
				name: 'Karton po dysku Lexar NM790 Pci-e NVMe 2 TB',
				date: trashDate,
				size: '22 mm &times; 2.45 mm &times; 80 mm'
			},
			{
				image: karton1Image,
				name: 'Karton po dysku Lexar NM790 Pci-e NVMe 1 TB',
				date: trashDate,
				size: '22 mm &times; 2.45 mm &times; 80 mm'
			},
			{
				image: karton2Image,
				name: 'Karton po AQIRYS Pasta termiczna AQ-2',
				date: trashDate,
				size: '-'
			},
			{
				image: karton3Image,
				name: 'Karton po chłodzeniu ENDORFY Navis F360 ARGB',
				date: trashDate,
				size: '120 mm &times; 395 mm &times; 54 mm'
			},
			{
				image: karton4Image,
				name: 'Karton po karcie graficznej Gigabyte AORUS Radeon RX 9070 XT ELITE 16GB',
				date: trashDate,
				size: '33.9 cm &times; 13.6 cm &times; 5.9 cm'
			}
		]
	};
}
