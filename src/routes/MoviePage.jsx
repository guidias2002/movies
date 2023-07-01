import Trailer from 'components/Trailer';
import Artist from 'components/Artist';
import CardInfo from 'components/CardInfo';
import ProdCompanies from 'components/ProdCompanies';
import BannerMovie from 'components/BannerMovie';

import './MoviePage.css'

export default function MoviePage() {

  return (
    <main className='mainMoviePage'>
      <BannerMovie />

      <section className='sectionCast'>
        <h2 className='title-sections'>Elenco principal</h2>
        <div className='sectionCast-info'>
          <Artist />
          <CardInfo />
        </div>
      </section>

      <section className='sectionTrailer'>
        <h2 className='title-sections'>Trailer</h2>
        <Trailer />
      </section>

      <section className='sectionProd'>
        <h2 className='title-sections'>Produção </h2>
        <ProdCompanies />
      </section>
    </main>
  )
}
