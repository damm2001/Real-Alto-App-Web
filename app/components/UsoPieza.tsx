import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface UsoPiezaProps {
	data: any[];
}

function UsoPieza({ data }: UsoPiezaProps) {
	const getLink = (index: any) => {
		const link = data[index]?.nombre_uso ?? '#';
		return '/catalogo/piezas/uso/' + link;
	};

	return (
		<div className='flex flex-col w-[100vw] items-center'>
			<div className='flex flex-col p-6 gap-4'>
				<h2 className='font-erode font-bold text-naranja uppercase lg:text-2xl md:text-xl sm:text-lg text-center'>
					Por tipo de uso
				</h2>
				<p className='text-black text-justify md:w-[35vw] font-robotSlap text-base mt-2 font-light'>
					Esta categoría les invita a explorar las piezas arqueológicas....
				</p>
			</div>
			<div className='md:mr-auto flex h-[20vh] sm:h-[32vh] w-full md:w-[70vw] text-4xl md:bg-vector3 justify-center md:justify-normal mt-2'>
				<div className='flex justify-around md:justify-end gap-2 md:gap-4 items-center w-full md:mr-20 overflow-x-auto'>
					{data.map((uso, index) => (
						<Link key={index} href={getLink(index)}>
							<div
								key={index}
								className='bg-black rounded-lg w-[40vw] md:w-[15vw] md:h-[20vh] space-y-2 flex flex-col justify-between overflow-hidden transform transition-transform duration-300 hover:scale-110'
							>
								<h3 className='font-erode text-white text-lg font-semibold text-center uppercase'>
									{uso?.nombre_uso.replace(/-/g, ' ')}
								</h3>
								<Image
									src={`/catalogo/${uso?.nombre_uso.toLowerCase()}.png`}
									alt={uso?.nombre_uso}
									width={350}
									height={350}
									priority
									className='object-cover'
								/>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default UsoPieza;
