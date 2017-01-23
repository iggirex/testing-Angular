describe("Testing AngularJS Test Suite", function(){

  beforeEach(module("testingAngularApp"));

  describe("Testing AngularJS Controller", function(){
    var scope, ctrl;
    beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      ctrl = $controller("testingAngularCtrl", {$scope:scope});
    }))

    afterEach(function(){
      //cleanup code
    })

    it("should initialize the title in the scope", function(){
      // module("testingAngularApp");

      // var scope = {};
      // var ctrl;

      // inject(function($controller){
      //   ctrl = $controller("testingAngularCtrl", {$scope:scope});
      // });

      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("Testing AngularJS Applications");
    });
  });
});
