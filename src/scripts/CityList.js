"use strict";
/**
 * Copyright (c) 2015 Nikolai Mavrenkov <koluch@koluch.ru>
 *
 * Distributed under the MIT License (See accompanying file LICENSE or copy at http://opensource.org/licenses/MIT).
 *
 * Created: 09.12.2015 22:31
 */

var React = require('react');

function formatTemp(temp) {
    if(temp > 0) {
        return "+" + temp;
    }
    else {
        return temp;
    }
}

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                {
                    this.props.data.map((city) => (
                        <div key={city.name}>
                            { city.name }: { formatTemp(city.weather.temp) }
                        </div>
                    ))
                }
            </div>
        )
    }
});