import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Rocket, Twitter } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 via-pink-400 to-cyan-400">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-neutral-800">Pointer School</h1>
        <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
          <Link href="https://x.com/PointerSchoolSL" target="_blank" rel="noopener noreferrer">
            <Twitter className="mr-2 h-4 w-4" />
            Escribinos en X (Twitter)
          </Link>
        </Button>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-neutral-800 mb-4">Te propongo aprender a programar!</h2>
          <p className="text-2xl text-neutral-800 mb-8">Esta escuela tiene la intención de acercar la programación de manera sencilla a la comunidad de San Luis.</p>
          <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-8 py-6 rounded-full animate-bounce">
            <Link href="emailto:ciruelosmf@gmail.com">Contactanos!</Link>
          </Button>
        </section>

        <section id="learn-more" className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white bg-opacity-80 transform hover:scale-105 transition-transform duration-200">
            <CardContent className="p-6 text-center">
              <Lightbulb className="h-16 w-16 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-2xl font-bold mb-2">No hace falta experiencia</h3>
              <p>Podés empezar de cero</p>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-80 transform hover:scale-105 transition-transform duration-200">
            <CardContent className="p-6 text-center">
              <Code className="h-16 w-16 mx-auto mb-4 text-pink-500" />
              <h3 className="text-2xl font-bold mb-2">Proyectos básicos</h3>
              <p>Construir apps y sitios web sencillos que puedan demostrar los conceptos de la programación</p>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-80 transform hover:scale-105 transition-transform duration-200">
            <CardContent className="p-6 text-center">
              <Rocket className="h-16 w-16 mx-auto mb-4 text-cyan-500" />
              <h3 className="text-2xl font-bold mb-2">Clases virtuales por Zoom</h3>
              <p>Apreder de manera virtual en grupo por video llamada, como en la universidad de la Punta</p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-neutral-800 mb-8">Si tenés interés en saber más de esta disciplina, escribinos para unirte a alguna clase.</h2>
          <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-8 py-6 rounded-full">
            <Link href="emailto:ciruelosmf@gmail.com">Contactanos!</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 text-white text-center py-4 mt-16">
        <p>© 2024 Pointer School. Para San Luis con ❤️ y mucho ☕</p>
      </footer>
    </div>
  )
}

