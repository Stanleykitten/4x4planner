'use strict';

describe('courseSearch', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('coursecatApp'));

  // Test the controller
  describe('CourseSearchController', function() {

    it('should create a `courses` model with 7 courses', inject(function($componentController) {
      var ctrl = $componentController('courseSearch');

      expect(ctrl.courses.length).toBe(7);
    }));

  });

});
