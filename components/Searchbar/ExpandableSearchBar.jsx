import search from '../../assets/img/Magnifer.svg'
import Image from 'next/image'
const ExpandableSearchBar = () => {
  return (
    <div className="search-container inline-block lg:hidden bg-[#202429] rounded-md">
      <form action="/search" method="get">
        <input
          className="search expandright text-gray-700"
          id="searchright"
          type="search"
          name="q"
          placeholder="Search"
        />
        <label className="button searchbutton" htmlFor="searchright">
          <Image src={search} alt="srch" className='h-full mx-auto'/>
        </label>
      </form>

      <style jsx>{`
        .search-container {
          position: relative;
          height: 50px;
          width: 50px;
          vertical-align: bottom;
        }

        .button {
          display: inline-block;
          font-size: 14px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
        }

        .searchbutton {
          position: absolute;
          font-size: 22px;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .search:focus + .searchbutton {
          transition-duration: 0.4s;
          color: black;
        }

        .search {
          position: absolute;
          left: 49px;
          outline: none;
          border: none;
          padding: 0;
          width: 0;
          height: 100%;
          z-index: 10;
          transition-duration: 0.4s;
        }

        .search:focus {
          width: 275px;
          padding: 0 16px 0 0;
        }

        .expandright {
          left: auto;
          right: 49px;
        }

        .expandright:focus {
          padding: 0 0 0 16px;
        }
      `}</style>
    </div>
  );
};

export default ExpandableSearchBar;
