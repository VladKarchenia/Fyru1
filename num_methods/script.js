'use strict';

Number.prototype.plus = num => this + num;
Number.prototype.minus = num => this - num;
(2).plus(3).minus(1)

Number.plus = num => this + num;
Number.minus = num => this - num;
(2).plus(3).minus(1)
