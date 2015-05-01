describe("Bowling Game", function () {
  var player;

  beforeEach(function () {
    player = new Player();
  });

  describe("Player", function () {
    
    it("can have gutter game (20 zero rolls)", function() {
      // for (var i = 0; i < 20; i++) {
      //   player.roll(0);
      // }
      rollMany(0, 20);
      expect(player.score()).toEqual(0);
    });

    it("can roll all ones", function () {
      rollMany(1, 20);
      expect(player.score()).toEqual(20);
    });

    it("can roll a spare (10 pins + 1st roll pins from nxt frame)", function () {
      player.roll(6);
      player.roll(4);
      player.roll(5);
      rollMany(0, 17);
      console.log(player.score());
      expect(player.score()).toEqual(20);
    });

    it("can roll a strike", function () {
      player.roll(10);
      player.roll(6);
      player.roll(1);
      rollMany(0, 16);
      expect(player.score()).toEqual(24);
    });

    it("can roll a perfect game", function () {
      rollMany(10,12);
      expect(player.score()).toEqual(300);
    });

    var rollMany = function (pins, rolls) {
      for (var i = 0; i < rolls; i++) {
        player.roll(pins);
      }
    };

  });
});