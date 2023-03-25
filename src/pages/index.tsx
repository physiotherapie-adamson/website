import Head from 'next/head'
import Image from 'next/image'
import waitingRoom from '@/assets/waiting-room.jpg'
import bottle from '@/assets/bottle.jpg'
import logo from '@/assets/logo.svg'
import map from '@/assets/map.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Praxis für Physiotherapie Kersti Adamson</title>
      </Head>
      <main>
        <Image src={waitingRoom} alt="" style={{ width: '100%', height: '70vh', objectFit: 'cover', objectPosition: 'bottom' }} />
          <div className='container container--centered'>
            <section className='col10'>
              <h1>Praxis für Physiotherapie Kersti Adamson</h1>
              <p>Some introduction...</p>
              <section>
                <h2>Über uns</h2>
                <p>Seit 2006 ist die Praxis für Physiotherapie in Weiterstadt-Gräfenhausen im Oberdörfer Stadtweg 13 zu finden, welche seit  November 2014 unter meiner Leitung ist.</p>
                <p>Mein Team setzt sich aus mehreren Therapeuten zusammen, die sich freuen, Sie in angenehmer und entspannter Atmosphäre zu begrüßen um Ihnen qualifizierte Physiotherapie anzubieten.</p>
                <p>Für eine orthopädische, neurologische oder postchirurgische Betreuung findet hier jeder den richtigen Ansprechpartner für seine Diagnose.</p>
                <p>Der Schwerpunkt meines Teams liegt in der Behandlung von Gelenks- und Wirbelsäulenerkrankungen sowie der Nachbehandlung von Verletzungen und Operationen.</p>
                <p>Durch kontinuierliche Weiterbildungen bringt sich mein Team auf den neuesten Stand, sodass wir unsere Patienten stets nach aktuellen Erkenntnissen behandeln können.</p>
                <p>Eine individuelle Behandlung des Patienten steht bei uns immer im Vordergrund. Selbstverständlich kommen wir bei Bedarf auch zu Ihnen ins Haus.</p>
                <p>Die Praxis bietet verschiedene Behandlungs-Gutscheine an, welche gerne als besondere Geschenke benutzt werden.</p>
                <p>Ganz gleich, ob Sie gesetzlich, berufsgenossenschaftlich oder privat versichert sind, in meiner Praxis sind Sie herzlich willkommen!</p>
                <p>Ihre Kersti Adamson und Team</p>
              </section>
              <section className='container'>
                <div className='col6' style={{ backgroundImage: `url(${bottle.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className='col6'>
                  <h2>Therapieangebot</h2>
                  <div><h3>Krankengymnastik</h3></div>
                  <div><h3>Manuelle Therapie</h3></div>
                  <div><h3>Kiefergelenkbehandlung (CMD)</h3></div>
                  <div><h3>PNF</h3></div>
                  <div><h3>Bobath-Therapie für Erwachsene</h3></div>
                  <div><h3>Manuelle Lymphdrainage</h3></div>
                  <div><h3>Massage</h3></div>
                  <div><h3>Schlingentisch</h3></div>
                  <div><h3>Heißluft / Fango / Heiße Rolle</h3></div>
                  <div><h3>Kältetherapie</h3></div>
                  <div><h3>Atemtherapie</h3></div>
                  <div><h3>Beckenbodengymnastik</h3></div>
                  <div><h3>Hausbesuche</h3></div>
                  <div><h3>Myofasziale Techniken</h3></div>
                  <div><h3>Kinesio-Taping</h3></div>
                  <div><h3>Triggerpunkt Behandlung</h3></div>
                  <p>TODO Gutscheine!!</p>
                </div>
              </section>
              <section>
                <h2>Kontakt</h2>
                <Image src={logo} alt="" />
                <p>Praxis für Physiotherapie Kersti Adamson</p>
                <p>06150 961197</p>
                <p>Erreichbarkeit: Mo-Fr: 08:00 - 19:00 Uhr</p>
                <p>Rezeption: Mo, Di, Do: 09:00 - 12:00 Uhr</p>
                <p>Außerhalb erreichbar auf Anrufbeantowrter</p>
                <p>Oberdörfer Stadtweg 13</p>
                <p>64331 Weiterstadt (Gräfenhausen)</p>
                <p>TODO: Wissenswertes zu Terminen</p>
                <div>
                  <Image src={map} alt="Karte"></Image>
                  <a href="https://www.openstreetmap.org/copyright">&copy;OpenStreetMap-Mitwirkende</a>
                </div>
              </section>
            </section>
          </div>
      </main>
    </>
  )
}
