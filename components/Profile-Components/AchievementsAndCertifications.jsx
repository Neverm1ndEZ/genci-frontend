import React from 'react';

const AchievementsAndCertifications = () => {
  return (
    <div className="px-5 w-full bg-darkBackgroundSecondary rounded-xl text-white pb-6">
      {/* heading */}
      <div className="flex items-center py-7 border-b-2 border-[#A5A6A9]">
        <div className="w-2 h-6 bg-gradient-to-r from-[#FFC39B] to-[#FF894F] rounded-lg mx-3"></div>
        <h1 className="text-base lg:text-xl font-semibold">
          Achievements and Certifications
        </h1>
      </div>
      <br />
      <div className="grid grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            className="bg-darkBackgroundPrimary border-[#797A7E] rounded-2xl  mb-3"
            key={item}
          >
            <div className="flex justify-center w-full mt-5">
              <img
                src="https://s3-alpha-sig.figma.com/img/57b5/c1ec/9603597646254872dd51143d551cfb29?Expires=1698019200&Signature=K~GWkVM4IFE19eayvNJKojZ-bXdVpkLixOl6qpqM5JwHHe9beCna0acSTAY9bW~k1~SJtfZ9KlJ~v3u6-LD~SAjOGOjK5LCN1KtdsRbhYnu5qT7Z7GvIPqN7QNj7V9cx5Lu57RBsyCKzJWy0ALkhhdqtf6ldNcX~aWRlS~596oq5x7ThiQOb5QHLg7~93HxIfmTzpWmQC2JJXOsCBadb4iqx~NX~YzeaHEJQ7H5pcARaFkkUiXeLmA6tVtQ6-FlxkHUEdwR-0a9ccdL6LjzrdORpGFrzl~ZNCrfXIeyZ4-5OrM8BBZMmvp~fZm8y7pTPwb2mROND6f2g6FlUnEcZog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="icon"
                className=" w-16 h-16 p-4 rounded-full bg-darkBackgroundSecondary"
              />
            </div>
            <div className=" text-center p-6">
              <h2 className="text-xl font-bold ">Lifelong Learner Laureate</h2>
              <p className="text-sm ml-4 py-2">
                vamus quis quam. Vivamus bibendum, nulla in tempus dictum
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsAndCertifications;
