'use client'

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';

export default function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'form'>) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in  the email and password fields');
            return;
        }

        try {
            const payload = {
                email,
                password,
            }
            const response = await axios({
                method: 'POST',
                url: 'http://localhost:8000/users',
                data: {
                    payload
                },
            })
            console.log(response.data)
            if (response.status === 201) {
                alert('Login successful');
                window.location.href = '/dashboard';
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className={cn('flex flex-col gap-6', className)} onSubmit={handleSubmit} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                            Forgot your password?
                        </a>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>
                {
                    error && (
                        <div className="text-red-500 text-sm mt-2">
                            {error}
                        </div>
                    )
                }
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
                <Button variant="outline" className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.66 8.84 8.44 9.72v-6.88H7.9v-2.84h2.54V9.5c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.78-1.62 1.58v1.88h2.78l-.44 2.84h-2.34v6.88C18.34 20.84 22 16.84 22 12c0-5.52-4.48-10-10-10z"
                        />
                    </svg>
                    Continue with Facebook
                </Button>
            </div>
        </form>
    );
}