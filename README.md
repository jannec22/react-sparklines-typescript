> :heavy_exclamation_mark: **Original Repo**: https://github.com/borisyankov/react-sparklines - The original react-sparklines has not been updated for 3 years. This is a rewrite of the original library into Typescript and modern react classless components. The package is smaller and faster.

# Beautiful and expressive sparklines component for React
Live demos and docs: [borisyankov.github.io/react-sparklines/](http://borisyankov.github.io/react-sparklines/)

![](http://borisyankov.github.io/react-sparklines/img/dynamic.gif)

## Install

```
npm install react-sparklines-typescript-v2 --save
```


## Use

Import the Sparklines components that you need; for example to generate a simple chart:

![](http://borisyankov.github.io/react-sparklines/img/basic.png)

```
import { Sparklines } from 'react-sparklines-typescript-v2';
...
<Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
</Sparklines>
```

Sparklines component is a container with the following properties:

data - the data set used to build the sparkline

limit - optional, how many data points to display at once

width, height - dimensions of the generated sparkline in the SVG viewbox. This will be automatically scaled (i.e. responsive) inside the parent container by default.

svgWidth, svgHeight - If you want absolute dimensions instead of a responsive component set these attributes.

[preserveAspectRatio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) - default: 'none', set this to modify how the sparkline should scale

margin - optional, offset the chart

min, max - optional, bound the chart

#### Basic Sparkline

![](http://borisyankov.github.io/react-sparklines/img/customizable.png)

```
import { Sparklines, SparklinesLine } from 'react-sparklines-typescript-v2';
...
<Sparklines data={[5, 10, 5, 20]}>
  <SparklinesLine color="blue" />
</Sparklines>
```

#### Bars

![](http://borisyankov.github.io/react-sparklines/img/bars.png)

```
import { Sparklines, SparklinesBars } from 'react-sparklines-typescript-v2';
...
<Sparklines data={[5, 10, 5, 20]}>
  <SparklinesBars />
</Sparklines>
```

#### Spots

![](http://borisyankov.github.io/react-sparklines/img/spots.png)

```
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines-typescript-v2';
...
<Sparklines data={sampleData}>
    <SparklinesLine style={{ fill: "none" }} />
    <SparklinesSpots />
</Sparklines>
```

#### Reference Line

![](http://borisyankov.github.io/react-sparklines/img/referenceline.png)

```
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesReferenceLineTypes } from 'react-sparklines-typescript-v2';
...
<Sparklines data={sampleData}>
    <SparklinesLine />
    <SparklinesReferenceLine type={SparklinesReferenceLineTypes.mean} />
</Sparklines>
```

#### Normal Band

![](http://borisyankov.github.io/react-sparklines/img/normalband.png)

```
import { Sparklines, SparklinesLine, SparklinesNormalBand } from 'react-sparklines-typescript-v2';
...
<Sparklines data={sampleData}>
    <SparklinesLine style={{ fill: "none" }}/>
    <SparklinesNormalBand />
</Sparklines>
```
