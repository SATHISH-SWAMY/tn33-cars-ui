  <div className="mt-20 px-4 sm:px-8 lg:px-20 max-w-[1640px] mx-auto">
  {/* Tab Switcher */}
  <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
    <div className="relative w-full sm:w-[500px] md:w-[660px] h-14 sm:h-16 grid grid-cols-2 bg-gray-100 rounded-lg p-1 mx-auto mb-6">
      <div
        className={`absolute inset-y-1 left-1 w-1/2 bg-[#e04c4c] rounded-lg transition-transform 
        ${activeTab === "sell" ? "translate-x-full" : "translate-x-0"}`}
      ></div>

      <button
        onClick={() => setActiveTab("buy")}
        className={`relative z-10 font-medium transition-colors cursor-pointer
          ${activeTab === "buy" ? "text-white" : "text-gray-700"}`}
      >
        Buy cars
      </button>

      <button
        onClick={() => setActiveTab("sell")}
        className={`relative z-10 font-medium transition-colors cursor-pointer
          ${activeTab === "sell" ? "text-white" : "text-gray-700"}`}
      >
        Sell cars
      </button>
    </div>

    {/* Banner Section */}
    <div className="space-y-4">
      <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl shadow-sm text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          {activeTab === "buy" ? "Find Your Dream Car" : "Get Your Car Evaluated"}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          {/* Carousel */}
          <div className="flex-shrink-0 w-full md:w-[500px]">
            <Carousel plugins={[plugin.current]} className="w-full max-w-sm sm:max-w-md md:max-w-lg">
              <CarouselContent>
                {CarsData.customerSatisfactionImages.map((i) => (
                  <CarouselItem key={i.id}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center">
                        <img
                          src={i.image}
                          className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
                          alt="car"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Text & CTA */}
          <div className="w-full">
            {activeTab === "buy" ? (
              <div className="flex flex-col items-center p-6 sm:p-8 gap-6 sm:gap-10 bg-gradient-to-br rounded-xl text-center max-w-full sm:max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Find Your New Car</h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-xl">
                  Discover a wide range of{" "}
                  <span className="font-semibold text-blue-600">TN 33 cars®</span> used cars,
                  doorstep test drives, and a 5-day return policy.
                </p>
                <ul className="text-gray-700 text-sm space-y-2 w-full text-left">
                  <li>✅ 200-point quality check</li>
                  <li>✅ 5-day money-back guarantee</li>
                  <li>✅ 1-year warranty</li>
                  <li>✅ Doorstep test drive & delivery</li>
                </ul>
                <Button className="bg-[#e04c4c] hover:bg-[#c53d3d] px-4 sm:px-6 py-3 text-white text-base sm:text-lg rounded-lg transition-all duration-300 shadow-lg w-full sm:w-60">
                  Browse Cars
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center p-6 sm:p-8 gap-6 sm:gap-10 bg-gradient-to-br rounded-xl text-center max-w-full sm:max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Sell Your Car For Best Price</h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-xl">
                  Get instant quotes, doorstep inspections, and a hassle-free selling process.
                </p>
                <ul className="text-gray-700 text-sm space-y-2 w-full text-left">
                  <li>✅ 200-point quality check</li>
                  <li>✅ 5-day money-back guarantee</li>
                  <li>✅ 1-year warranty</li>
                  <li>✅ Doorstep test drive & delivery</li>
                </ul>
                <Link to="/SaleForm" className="w-full sm:w-60">
                  <Button className="bg-[#e04c4c] hover:bg-[#c53d3d] px-4 sm:px-6 py-3 text-white text-base sm:text-lg rounded-lg transition-all duration-300 shadow-lg w-full">
                    Get Price
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Browse by Type */}
      <h2 className="font-bold text-2xl sm:text-3xl text-center mb-6 sm:mb-10">Browse By Type</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {CarsData.Categories.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 flex flex-col items-center hover:shadow-md transition-shadow cursor-pointer"
          >
            <img src={item.icon} alt={item.name} className="w-8 h-8 sm:w-10 sm:h-10" />
            <h3 className="font-semibold mt-2 text-center text-xs sm:text-sm">{item.name}</h3>
          </div>
        ))}
      </div>

      {/* Our Services */}
      <div className="mt-12 sm:mt-16 bg-[#e04c4c] rounded-2xl py-8 sm:py-10 px-4 sm:px-10 w-full">
        <h2 className="font-bold text-2xl sm:text-3xl text-center text-white mb-6 sm:mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
          {CarsData.services.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 border rounded-xl p-3 sm:p-5 flex flex-col items-center justify-between hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
            >
              <img src={item.image} alt={item.name} className="w-full h-24 sm:h-40 object-contain mb-4" />
              <h3 className="font-semibold text-center text-xs sm:text-sm md:text-base">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
</div>
</div>
