import { ModeToggle } from '@/components/shared/mode-toggle';
import { Button } from '@/components/ui/button';
import { nav_links } from '@/constants';
import { CircleUser } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	const auth = true;
	return (
		<div className='flex items-center justify-between px-24 py-2 fixed inset-0 top-0 h-16 border-b'>
			<Link href={'/'}>
				<h1 className='text-4xl font-space-grotesk font-bold'>Super Blog</h1>
			</Link>
			<div className='flex space-x-20'>
				<div className='flex space-x-5'>
					{nav_links.map((item, idx) => (
						<Link
							key={idx}
							href={item.link}
							className='flex items-center space-x-1 hover:text-blue-600 transition-all'
						>
							{auth ? (
								<>
									<p className='font-bold text-lg font-space-grotesk'>
										{item.title}
									</p>
								</>
							) : item.notAuth ? (
								<>
									<p className='font-bold text-lg font-space-grotesk'>
										{item.title}
									</p>
								</>
							) : null}
						</Link>
					))}
					<ModeToggle />
				</div>
				{auth ? (
					<CircleUser className='cursor-pointer' size={25} />
				) : (
					<div>
						<Link href={'/login'}>
							<Button>Login</Button>
						</Link>
						<Link href={'/register'}>
							<Button>Register</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
