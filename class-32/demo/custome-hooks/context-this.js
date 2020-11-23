const arrow = () => {
  console.log('WHAT IIS THIS arrow', this);
};

function y() {
  const z = 4;
  console.log('WHAT IIS THIS Y', this);
  const that = this;
  function x() {
    console.log('WHAT IIS THIS X', that);
  }
  x();
}

function y2() {
  const z = 4;
  console.log('WHAT IIS THIS Y2', this);
  const child = () => {
    console.log('WHAT IIS THIS child', this);
  };
  child();
}

// arrow();
// y();
y.call({ name: 'mahmoud' });

// y2();
// y2.call({ name: 'ahmad' });
